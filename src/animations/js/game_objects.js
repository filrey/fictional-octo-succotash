let objects =
{
    '@': player,
    'o': coin,
    '=': lava, '|': lava, 'v': lava
};

function lava(pos, ch)
{
    this.pos = pos;
    this.size = new vector(1, 1);
    if (ch == "=")
    {
        this.speed = new vector(2, 0);
    }
    else if (ch == '|')
    {
        this.speed = new vector(0, 2);
    }
    else if (ch == 'v')
    {
        this.speed = new vector(0, 3);
        this.repeatPos = pos;
    }
}

lava.prototype.type = 'lava';
lava.prototype.act = function(step, level)
{
    let new_position = this.pos.plus(this.speed.times(step));
    if (!level.obstacleAt(new_position, this.size))
        this.pos = new_position;
    else if (this.repeatPos)
        this.pos = this.repeatPos;
    else
        this.speed = this.speed.times(-1);
};

function coin(pos)
{
    this.base_position = this.pos = pos.plus(new vector(0.2, 0.005));
    this.size = new vector(0.6, 0.6);
    this.wobble = Math.random() * Math.PI * 2;
}

// coin movement
coin.prototype.type = 'coin';
let wobble_speed = 10, wobble_distance = 0.5;
coin.prototype.act = function(step)
{
    this.wobble += step * wobble_speed;
    let wobble_position = Math.sin(this.wobble) * wobble_distance;
    this.pos = this.base_position.plus(new vector(0, wobble_position));
};

function elt(name, className)
{
    let elt = document.createElement(name);
    if (className) elt.className = className;
        return elt;
}