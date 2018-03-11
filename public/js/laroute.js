(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://localhost',
            routes : [{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/open","name":"debugbar.openhandler","action":"Barryvdh\Debugbar\Controllers\OpenHandlerController@handle"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/clockwork\/{id}","name":"debugbar.clockwork","action":"Barryvdh\Debugbar\Controllers\OpenHandlerController@clockwork"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/stylesheets","name":"debugbar.assets.css","action":"Barryvdh\Debugbar\Controllers\AssetController@css"},{"host":null,"methods":["GET","HEAD"],"uri":"_debugbar\/assets\/javascript","name":"debugbar.assets.js","action":"Barryvdh\Debugbar\Controllers\AssetController@js"},{"host":null,"methods":["GET","HEAD"],"uri":"lang\/{lang}","name":null,"action":"App\Http\Controllers\LanguageController@swap"},{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":"frontend.index","action":"App\Http\Controllers\Frontend\FrontendController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"macros","name":"frontend.macros","action":"App\Http\Controllers\Frontend\FrontendController@macros"},{"host":null,"methods":["GET","HEAD"],"uri":"contact","name":"frontend.contact","action":"App\Http\Controllers\Frontend\ContactController@index"},{"host":null,"methods":["POST"],"uri":"contact\/send","name":"frontend.contact.send","action":"App\Http\Controllers\Frontend\ContactController@send"},{"host":null,"methods":["GET","HEAD"],"uri":"dashboard","name":"frontend.user.dashboard","action":"App\Http\Controllers\Frontend\User\DashboardController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"account","name":"frontend.user.account","action":"App\Http\Controllers\Frontend\User\AccountController@index"},{"host":null,"methods":["PATCH"],"uri":"profile\/update","name":"frontend.user.profile.update","action":"App\Http\Controllers\Frontend\User\ProfileController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"vocabulary\/learn","name":"frontend.vocabulary.learn","action":"App\Http\Controllers\Frontend\Vocabulary\VocabularyController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"vocabulary\/learn\/{date}\/practice","name":"frontend.vocabulary.practice","action":"App\Http\Controllers\Frontend\Vocabulary\VocabularyController@practiceWord"},{"host":null,"methods":["GET","HEAD"],"uri":"vocabulary\/get-word-by-date","name":"frontend.vocabulary.get-word-by-date","action":"App\Http\Controllers\Frontend\Vocabulary\VocabularyController@getWordByDate"},{"host":null,"methods":["POST"],"uri":"vocabulary\/add-new-word","name":"frontend.vocabulary.add-new-word","action":"App\Http\Controllers\Frontend\Vocabulary\VocabularyController@addNewWord"},{"host":null,"methods":["POST"],"uri":"vocabulary\/remove-word","name":"frontend.vocabulary.remove-word","action":"App\Http\Controllers\Frontend\Vocabulary\VocabularyController@removeWord"},{"host":null,"methods":["GET","HEAD"],"uri":"logout","name":"frontend.auth.logout","action":"App\Http\Controllers\Frontend\Auth\LoginController@logout"},{"host":null,"methods":["GET","HEAD"],"uri":"logout-as","name":"frontend.auth.logout-as","action":"App\Http\Controllers\Frontend\Auth\LoginController@logoutAs"},{"host":null,"methods":["PATCH"],"uri":"password\/change","name":"frontend.auth.password.change","action":"App\Http\Controllers\Frontend\Auth\ChangePasswordController@changePassword"},{"host":null,"methods":["GET","HEAD"],"uri":"login","name":"frontend.auth.login","action":"App\Http\Controllers\Frontend\Auth\LoginController@showLoginForm"},{"host":null,"methods":["POST"],"uri":"login","name":"frontend.auth.login.post","action":"App\Http\Controllers\Frontend\Auth\LoginController@login"},{"host":null,"methods":["GET","HEAD"],"uri":"login\/{provider}","name":"frontend.auth.social.login","action":"App\Http\Controllers\Frontend\Auth\SocialLoginController@login"},{"host":null,"methods":["GET","HEAD"],"uri":"register","name":"frontend.auth.register","action":"App\Http\Controllers\Frontend\Auth\RegisterController@showRegistrationForm"},{"host":null,"methods":["POST"],"uri":"register","name":"frontend.auth.register.post","action":"App\Http\Controllers\Frontend\Auth\RegisterController@register"},{"host":null,"methods":["GET","HEAD"],"uri":"account\/confirm\/{token}","name":"frontend.auth.account.confirm","action":"App\Http\Controllers\Frontend\Auth\ConfirmAccountController@confirm"},{"host":null,"methods":["GET","HEAD"],"uri":"account\/confirm\/resend\/{user}","name":"frontend.auth.account.confirm.resend","action":"App\Http\Controllers\Frontend\Auth\ConfirmAccountController@sendConfirmationEmail"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset","name":"frontend.auth.password.email","action":"App\Http\Controllers\Frontend\Auth\ForgotPasswordController@showLinkRequestForm"},{"host":null,"methods":["POST"],"uri":"password\/email","name":"frontend.auth.password.email.post","action":"App\Http\Controllers\Frontend\Auth\ForgotPasswordController@sendResetLinkEmail"},{"host":null,"methods":["GET","HEAD"],"uri":"password\/reset\/{token}","name":"frontend.auth.password.reset.form","action":"App\Http\Controllers\Frontend\Auth\ResetPasswordController@showResetForm"},{"host":null,"methods":["POST"],"uri":"password\/reset","name":"frontend.auth.password.reset","action":"App\Http\Controllers\Frontend\Auth\ResetPasswordController@reset"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/search","name":"admin.search.index","action":"App\Http\Controllers\Backend\Search\SearchController@index"},{"host":null,"methods":["POST"],"uri":"admin\/access\/user\/get","name":"admin.access.user.get","action":"App\Http\Controllers\Backend\Access\User\UserTableController"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/deactivated","name":"admin.access.user.deactivated","action":"App\Http\Controllers\Backend\Access\User\UserStatusController@getDeactivated"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/deleted","name":"admin.access.user.deleted","action":"App\Http\Controllers\Backend\Access\User\UserStatusController@getDeleted"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user","name":"admin.access.user.index","action":"App\Http\Controllers\Backend\Access\User\UserController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/create","name":"admin.access.user.create","action":"App\Http\Controllers\Backend\Access\User\UserController@create"},{"host":null,"methods":["POST"],"uri":"admin\/access\/user","name":"admin.access.user.store","action":"App\Http\Controllers\Backend\Access\User\UserController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}","name":"admin.access.user.show","action":"App\Http\Controllers\Backend\Access\User\UserController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/edit","name":"admin.access.user.edit","action":"App\Http\Controllers\Backend\Access\User\UserController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"admin\/access\/user\/{user}","name":"admin.access.user.update","action":"App\Http\Controllers\Backend\Access\User\UserController@update"},{"host":null,"methods":["DELETE"],"uri":"admin\/access\/user\/{user}","name":"admin.access.user.destroy","action":"App\Http\Controllers\Backend\Access\User\UserController@destroy"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/account\/confirm\/resend","name":"admin.access.user.account.confirm.resend","action":"App\Http\Controllers\Backend\Access\User\UserConfirmationController@sendConfirmationEmail"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/mark\/{status}","name":"admin.access.user.mark","action":"App\Http\Controllers\Backend\Access\User\UserStatusController@mark"},{"host":null,"methods":["DELETE"],"uri":"admin\/access\/user\/{user}\/social\/{social}\/unlink","name":"admin.access.user.social.unlink","action":"App\Http\Controllers\Backend\Access\User\UserSocialController@unlink"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/confirm","name":"admin.access.user.confirm","action":"App\Http\Controllers\Backend\Access\User\UserConfirmationController@confirm"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/unconfirm","name":"admin.access.user.unconfirm","action":"App\Http\Controllers\Backend\Access\User\UserConfirmationController@unconfirm"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/password\/change","name":"admin.access.user.change-password","action":"App\Http\Controllers\Backend\Access\User\UserPasswordController@edit"},{"host":null,"methods":["PATCH"],"uri":"admin\/access\/user\/{user}\/password\/change","name":"admin.access.user.change-password.post","action":"App\Http\Controllers\Backend\Access\User\UserPasswordController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/login-as","name":"admin.access.user.login-as","action":"App\Http\Controllers\Backend\Access\User\UserAccessController@loginAs"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{user}\/clear-session","name":"admin.access.user.clear-session","action":"App\Http\Controllers\Backend\Access\User\UserSessionController@clearSession"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{deletedUser}\/delete","name":"admin.access.user.delete-permanently","action":"App\Http\Controllers\Backend\Access\User\UserStatusController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/user\/{deletedUser}\/restore","name":"admin.access.user.restore","action":"App\Http\Controllers\Backend\Access\User\UserStatusController@restore"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/role","name":"admin.access.role.index","action":"App\Http\Controllers\Backend\Access\Role\RoleController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/role\/create","name":"admin.access.role.create","action":"App\Http\Controllers\Backend\Access\Role\RoleController@create"},{"host":null,"methods":["POST"],"uri":"admin\/access\/role","name":"admin.access.role.store","action":"App\Http\Controllers\Backend\Access\Role\RoleController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/access\/role\/{role}\/edit","name":"admin.access.role.edit","action":"App\Http\Controllers\Backend\Access\Role\RoleController@edit"},{"host":null,"methods":["PUT","PATCH"],"uri":"admin\/access\/role\/{role}","name":"admin.access.role.update","action":"App\Http\Controllers\Backend\Access\Role\RoleController@update"},{"host":null,"methods":["DELETE"],"uri":"admin\/access\/role\/{role}","name":"admin.access.role.destroy","action":"App\Http\Controllers\Backend\Access\Role\RoleController@destroy"},{"host":null,"methods":["POST"],"uri":"admin\/access\/role\/get","name":"admin.access.role.get","action":"App\Http\Controllers\Backend\Access\Role\RoleTableController"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/dashboard","name":"admin.dashboard","action":"App\Http\Controllers\Backend\DashboardController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/log-viewer","name":"log-viewer::dashboard","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/log-viewer\/logs","name":"log-viewer::logs.list","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@listLogs"},{"host":null,"methods":["DELETE"],"uri":"admin\/log-viewer\/logs\/delete","name":"log-viewer::logs.delete","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/log-viewer\/logs\/{date}","name":"log-viewer::logs.show","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@show"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/log-viewer\/logs\/{date}\/download","name":"log-viewer::logs.download","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@download"},{"host":null,"methods":["GET","HEAD"],"uri":"admin\/log-viewer\/logs\/{date}\/{level}","name":"log-viewer::logs.filter","action":"Arcanedev\LogViewer\Http\Controllers\LogViewerController@showByLevel"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // laroute.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // laroute.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // laroute.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // laroute.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // laroute.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // laroute.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.laroute = laroute;
    }

}).call(this);

