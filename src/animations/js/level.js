// @: start position
// o: coin
// x: level pieces
// !: Non-moving lava
// =: Vertical moving lava
// v: falling lava
// |: Horizontal moving lava

const GAME_LEVELS = [
    // level 1
    ["                                                                               ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "@ oooooooooo                                                                 xxx",
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
    // end level 1
    ["                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                                ",
    "                                                                              xx",
    "                                                                              xx",
    "                                                                              xx",
    "                                                                              xx",
    "                                                                              xx",
    "                           oo                                                 xx",
    "                                                                              xx",
    "  xxxxxxx@                x                                                   xx",
    "!!!vvvvxx             x                                                       xx",
    "!!x             xxxx                                                          xx",
    "!!x                                                                        o  xx",
    "!!x                                               xx                  xxx     xx",
    "!!x oooo                                     xxxx    ==     xxxxxooooooo      xx",
    "!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxxxxxxxxx",
    "                                !!!                                             "],
    // [ "insert another level structure here" ]
];

// @ts-check
function level(stage_design)
{
    this.width = stage_design[0].length;
    this.height = stage_design.length;
    this.grid = [];
    this.actors = [];

    for (let y = 0; y < this.height; y++)
    {
        let line = stage_design[y], gridLine = [];
        for (let x = 0; x < this.width; x++)
        {
            let ch = line[x], field_type = null;
            let Actor = objects[ch];

            if (Actor) this.actors.push(new Actor(new vector(x, y), ch));
            else if (ch == 'x') field_type = 'wall';
            else if (ch == '!') field_type = 'lava';

            gridLine.push(field_type);
        }
        this.grid.push(gridLine);
    }
    this.player = this.actors.filter(function(actor)
    {
        return actor.type == 'player';
    })[0];
    this.status = this.delay = null;
}
level.prototype.finished = function()
{
    return this.status != null && this.delay < 0;
};

level.prototype.obstacleAt = function(pos, size)
{
    let xStart = Math.floor(pos.x);
    let xEnd = Math.ceil(pos.x + size.x);
    let yStart = Math.floor(pos.y);
    let yEnd = Math.ceil(pos.y + size.y);

    if (xStart < 0 || xEnd > this.width || yStart < 0)
    return 'wall';
    if (yEnd > this.height)
    return 'lava';
    for (let y = yStart; y < yEnd; y++)
    {
        for (let x = xStart; x < xEnd; x++)
        {
            let field_type = this.grid[y][x];
            if (field_type) return field_type;
        }
    }
};

level.prototype.actorAt = function(actor)
{
    for (let i = 0; i < this.actors.length; i++)
    {
        let other = this.actors[i];
        if (other != actor &&
            actor.pos.x + actor.size.x > other.pos.x &&
            actor.pos.x < other.pos.x + other.size.x &&
            actor.pos.y + actor.size.y > other.pos.y &&
            actor.pos.y < other.pos.y + other.size.y)
            return other;
        }
    };

let maxStep = 0.02;

level.prototype.animate = function(step, keys)
{
    if (this.status != null)
    this.delay -= step;

    while (step > 0) {
        let current_step = Math.min(step, maxStep);
        this.actors.forEach(function(actor)
        {
            actor.act(current_step, this, keys);
        }, this);
        step -= current_step;
    }
};

level.prototype.player_collision = function(type, actor)
{
    if (type == 'lava' && this.status == null)
    {
        this.status = 'lost';
        this.delay = 1;
    }
    else if (type == 'coin')
    {
        this.actors = this.actors.filter(function(other)
        {
            return other != actor;
        });
        // all coins collected!
        if (!this.actors.some(function(actor)
        {
            return actor.type == 'coin';
        }))
        {
            this.status = 'won';
            this.delay = 1;
        }
    }
}