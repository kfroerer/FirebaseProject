module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("user", {
        name: DataTypes.STRING
    });

    User.associate = function (models) {
        Author.hasMany(models.Favorites, {
            onDelete: "cascade"
        });
    };

    return User
};