module.exports = function (config) {
    config.set({

        basePath: './app',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-cookies/angular-cookies.js',
            //'bower_components/angular-scenario/angular-scenario.js',
            'bower_components/jquery/dist/jquery.js',
            //'bower_components/protractor/lib/protractor.js',
            '../tests/lib/sinon-1.13.0.js',
            'app.js',
            'components/**/*.js',
            'directives/**/*.js',
            'controllers/**/*.js',
            'filters.js',
            'services/**/*.js',
            'view*/**/*.js',
            '../tests/unit/*.js',
            'templates/**/*.html'
        ],

        //preprocessor: {
        //    'app/templates/directives/*.html': 'html2js'
        //},

        //ngHtml2JsPreprocessor: {
        //    stripPrefix: 'app/'
        //},

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        client: {
            captureConsole: true
        }

    });
};
