//= require jquery-1.6.2.min
//= require underscore-1.3.1.min
//= require backbone-0.9.2.min
//
//= require airstrip
//= require ./admin
//
//= require templates/flash
//= require views/flashview
//= require mixins/enableform
//= require helpers/commonhelpers
//
//= require_tree ./templates
//= require_tree ./views
//= require_tree ./models
//= require ./routes

$(function() {
    Airstrip.Admin.router = new Airstrip.Admin.Router();
    app = Airstrip.Admin.router
    app.session.fetch().complete(function() {
        if (!app.session.isAuthenticated()) {
            app.navigate('admin/login', true)
        }
        Backbone.history.start({ pushState: true })
    })
})
