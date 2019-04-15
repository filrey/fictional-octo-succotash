function player(pos)
{
    this.pos = pos.plus(new vector(0, -10));
    this.size = new vector(1, 2);
    this.speed = new vector(0, 0);
}

player.prototype.type = 'player';
let player_x_speed = 7;

player.prototype.moveX = function(step, level, keys)
{
    this.speed.x = 0;
    if (keys.left) this.speed.x -= player_x_speed;
    if (keys.right) this.speed.x += player_x_speed;

    let motion = new vector(this.speed.x * step, 0);
    let new_position = this.pos.plus(motion);
    let obstacle = level.obstacleAt(new_position, this.size);

    if (obstacle) level.player_collision(obstacle);
    else this.pos = new_position;
};

let gravity = 40;
let jump_speed = 20;
player.prototype.moveY = function(step, level, keys)
{
    this.speed.y += step * gravity;
    let motion = new vector(0, this.speed.y * step);
    let new_position = this.pos.plus(motion);
    let obstacle = level.obstacleAt(new_position, this.size);

    if (obstacle) {
        level.player_collision(obstacle);
        if (keys.up && this.speed.y > 0) this.speed.y = -jump_speed;
        else this.speed.y = 0;
    }
    else this.pos = new_position;
};

player.prototype.act = function(step, level, keys)
{
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);

    let object = level.actorAt(this);
    if (object) level.player_collision(object.type, object);

    if (level.status == 'lost')
    {
        this.pos.y += step;
        this.size.y -=step;
    }
};

// stores position and size of player
function vector(x, y)
{
    this.x = x; this.y = y;
}
vector.prototype.plus = function(other)
{
    return new vector(this.x + other.x, this.y + other.y);
}
vector.prototype.times = function(factor)
{
    return new vector(this.x * factor, this.y * factor);
}