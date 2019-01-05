function createGround(sprite) {
    return {
        sprite: sprite,
        width: 32,
        height: 32,
        position: canvas.height - 32,
        draw: function() {

            for (let i = 0; i < canvas.width; i += this.width) {
                ctx.drawImage(this.sprite, i, this.position, this.width, this.height);
            }
        }
    }
}

function Platform(x, y, sprite, length, type) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.width = length * this.sprite.width;
    this.height = this.sprite.height;
    this.blockType = type;
    this.draw = function() {

        for (let i = this.x; i < this.x + this.width; i += this.sprite.width) {

            ctx.drawImage(this.sprite, i, this.y, this.sprite.width, this.height);
            ctx.strokeRect(i, this.y, this.sprite.width, this.height);
        }
    }
}