Sequelize.prototype.Validator = Sequelize.Validator = require('validator')

this.sequelize.Validator.extend('checkBadgeId', function(val) {
    return req.body.badgeId === req.body.badgeId
})



/*
 Sequelize.prototype.Validator = Sequelize.Validator = require('validator') 


it('allows me to add custom validation functions to validator.js', function () {
    +     
    +
    +      var User = this.sequelize.define('User', {
    +        name: {
    +          type: Sequelize.STRING,
    +          validate: {
    +            isExactly7Characters: true

    +          }
    +        }
    +      })
    +
    +      return User.build({
    +        name: 'abcdefg'
    +      }).validate().then(function (errors) {
    +        expect(errors === undefined).to.be.ok
    +
    +        return User.build({
    +          name: 'a'
    +        }).validate()
    +      }).then(function (errors) {
    +        expect(errors.name[0].message).to.equal('Validation isExactly7Characters failed')
    +      })
    +    })

    */