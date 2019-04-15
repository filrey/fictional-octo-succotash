//keys player movement
let keys = {37: 'left', 38: 'up', 39: 'right'};

function key_press(codes)
{
    let pressed = Object.create(null);
    function handler(event)
    {
        if (codes.hasOwnProperty(event.keyCode))
        {
            let down = event.type == 'keydown';
            pressed[codes[event.keyCode]] = down;
            event.preventDefault();
        }
    }
    addEventListener('keydown', handler);
    addEventListener('keyup', handler);

    pressed.unregister = function()
    {
        removeEventListener('keydown', handler);
        removeEventListener('keyup', handler);
    };

    return pressed;
}

function animate(frame_function)
{
    let last_time = null;
    function frame(time)
    {
        let stop = false;
        if (last_time != null)
        {
            let timeStep = Math.min(time - last_time, 100) / 1000;
            stop = frame_function(timeStep) === false;
        }
        last_time = time;
        if (!stop)
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

let arrows = key_press(keys);

function run_level(level, Display, and_then)
{
    let display = new Display(document.body, level);
    // Used for storing pause state of the game
    let running = 'yes';

    function keyboard(event)
    {
        if (event.keyCode == 27)
        {
            if (running == 'no')
            {
                running = 'yes';
                animate(animation);
            }
            else if (running == 'pausing')
            {
                running = 'yes';
            }
            else if (running == 'yes')
            {
                running = 'pausing';
            }
        }
    }
    addEventListener('keydown', keyboard);

    function animation(step)
    {
        if (running == 'pausing')
        {
            running = 'no';
            return false;
        }

        level.animate(step, arrows);
        display.draw_frame(step);
        if (level.finished())
        {
            display.clear();
            if (and_then)
                and_then(level.status);
            return false;
        }
    }
    animate(animation);
}

function run_game(stage_design, Display)
{
    let lives = 3;
    let life = document.getElementById('lives');
    let game_status = document.getElementById('status');

    function start_level(n)
    {
        life.textContent = lives;
        run_level(new level(stage_design[n]), Display, function(status)
        {
            if (status == 'lost')
            {
                lives--;
                if (lives == 0)
                {
                    game_status.textContent = 'Game Over';
                    console.log('Game over');
                }
                else
                start_level(n);
            }
            else if (n < stage_design.length - 1)
            start_level(n + 1);
            else
            console.log('You win!');
        });
    }
    start_level(0);
}

function dom_display(parent, level)
{
    this.wrap = parent.appendChild(elt('div', 'game'));
    this.level = level;

    this.wrap.appendChild(this.draw_background());
    this.player = null;
    this.draw_frame();
}

let scale = 25;
dom_display.prototype.draw_background = function()
{
    let table = elt('table', 'background');
    table.style.width = this.level.width * scale + 'px';

    this.level.grid.forEach(function(row)
    {
        let row_element = table.appendChild(elt('tr'));
        row_element.style.height = scale + 'px';
        row.forEach(function(type)

        {
            row_element.appendChild(elt('td', type));
        });
    });
    return table;
};

// Draw the actors
dom_display.prototype.draw_actors = function()
{
    let wrap = elt('div');
    this.level.actors.forEach(function(actor)

    {
        let rect = wrap.appendChild(elt('div', 'actor ' + actor.type));
        rect.style.width = actor.size.x * scale + 'px';
        rect.style.height = actor.size.y * scale + 'px';
        rect.style.left = actor.pos.x * scale + 'px';
        rect.style.top = actor.pos.y * scale + 'px';
    });
    return wrap;
};

dom_display.prototype.draw_frame = function()
{
    if (this.player)
    this.wrap.removeChild(this.player);
    this.player = this.wrap.appendChild(this.draw_actors());

    this.wrap.class_name = 'game ' + (this.level.status || '');
    this.scroll_player_into_view();
};

dom_display.prototype.scroll_player_into_view = function()
{
    let width = this.wrap.clientWidth;
    let height = this.wrap.clientHeight;
    let margin = width / 3;


    let left = this.wrap.scrollLeft, right = left + width;
    let top = this.wrap.scrollTop, bottom = top + height;

    let player = this.level.player;
    let center = player.pos.plus(player.size.times(0.5)).times(scale);

    if (center.x < left + margin)
        this.wrap.scrollLeft = center.x - margin;
    else if (center.x > right - margin)
        this.wrap.scrollLeft = center.x + margin - width;
    if (center.y < top + margin)
        this.wrap.scrollTop = center.y - margin;
    else if (center.y > bottom - margin)
        this.wrap.scrollTop = center.y + margin - height;
}

dom_display.prototype.clear = function()
{
    this.wrap.parentNode.removeChild(this.wrap);
};

run_game(GAME_LEVELS, dom_display);




