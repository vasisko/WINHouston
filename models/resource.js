

module.exports = function (sequelize, DataTypes) {


 var Resource = sequelize.define("Resource", {
    name: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    website: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    housing: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    domestic_violence: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    food: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    clothing: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    babysitting: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    doctor_visit: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    medicine: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    infant_items: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    daycare: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    auto_repair: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    bus_pass: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    other_transport: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    furniture: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    household_goods: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    employment: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    legal_aide: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    school_supplies: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    education_assistance: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    counseling: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    drug_addiction: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    internet_phone_tech: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    },
    immigration_assist: {
        type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false
    }
});
return Resource;


};