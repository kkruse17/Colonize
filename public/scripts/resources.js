var logsText, farmsText, foodText, stoneText, houseText;

var resources = {
    population: 4,
    logs: 48,
    farms: 0,
    food: 8,
    stone: 28,
    houses: 0,
    
    resetDefaults: function(){
        this.population = 5;
        this.logs = 48;
        this.farms = 0;
        this.food = 8;
        this.stone = 28;
        this.houses = 0;
        civilianSprite.x = 890;
        civilianSprite.y = 472.5;
    
    },

    displayResourcesText: function () {
        
        popText = new createjs.Text("Popluation: " + this.population, "18px lucida Console", "#333");
        popText.x = 1250;
        popText.y = 800;
        
        foodText = new createjs.Text("Food: " + this.food, "18px lucida Console", "#333");
        foodText.x = 1200;
        foodText.y = 840;

        logsText = new createjs.Text("Logs: " + this.logs, "18px lucida Console", "#333");
        logsText.x = 1200;
        logsText.y = 860;

        stoneText = new createjs.Text("Stone: " + this.stone, "18px lucida Console", "#333");
        stoneText.x = 1200;
        stoneText.y = 880;
        
        houseText = new createjs.Text("Houses: " + this.houses, "18px lucida Console", "#333");
        houseText.x = 1200;
        houseText.y = 900;
        
        farmsText = new createjs.Text("Farms: " + this.farms, "18px lucida Console", "#333");
        farmsText.x = 1350;
        farmsText.y = 840;

        stage.addChild(popText);
        stage.addChild(logsText);
        stage.addChild(farmsText);
        stage.addChild(foodText);
        stage.addChild(stoneText);
        stage.addChild(houseText);

        stage.update();
    }
}