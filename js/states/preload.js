var GumpleRush = GumpleRush || {};

GumpleRush.Preload = function() {};
GumpleRush.Preload.prototype = {
	preload: function() {
		//načítací obrazovka
		this.nacitaci_zprava = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Gümple Rush se načítá...", {
			font: "16px Press Start 2P",
			fill: "#000000",
			align: "center"
		});
		this.nacitaci_zprava.anchor.setTo(0.5, 0.5);

		console.log("Gümple Rush v0.0.1");

		//načtení textur a map
		this.load.spritesheet("ruza", "assets/postavy/ruza.png", 20, 24);
		this.load.spritesheet("vlasta", "assets/postavy/Vlasta.png", 15, 26);
		this.game.load.tilemap("gymplik", "assets/gumple/gymplik_one.json", null, Phaser.Tilemap.TILED_JSON);
		this.load.image("textury", "assets/gumple/sady_dlazdic/final_version.png");

		//načtení zvuků
		this.game.load.audio("gaudeamus", "assets/gaudeamus.ogg");
	},
	create: function() {
		this.state.start("Gympl");
	}
};
