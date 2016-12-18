import $ from 'jquery';
import 'hotkeys';
import ace from 'ace';
import 'ace/theme-monokai';
import 'ace/mode-javascript';
import postcss from 'postcss';
import rhythmmeister from 'rhythmmeister';
import nested from 'postcss-nested';

$(function() {
    var cssStyles;

    fetch('styles/styles.css').then(function (response) {
        return response.text();
    }).then(function (cssContents) {
        cssStyles = cssContents;
        renderCss(cssStyles);
    });

    $(document).bind('keydown', 'ctrl+\\', function () {
        toggleHtmlClass('has-visible-vertical-rhythm-grid');
    });

    function toggleHtmlClass(className) {
        var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
        if (!activeClasses) {
            activeClasses = {}
        }
        $('html').toggleClass(className);
        activeClasses[className] = $('html').hasClass(className);
        localStorage.setItem('activeClasses', JSON.stringify(activeClasses));
    }

    var activeClasses = JSON.parse(localStorage.getItem('activeClasses'));
    $.each(activeClasses, function (className, value) {
        if (value) {
            $('html').addClass(className);
        }
    });

    $('.toggle-grid-visibility').on('click', function () {
        toggleHtmlClass('has-visible-vertical-rhythm-grid');
        return false;
    });
    ace.config.set('workerPath', 'jspm_packages/github/ajaxorg/ace-builds@1.2.6');
    var editor1 = ace.edit('code-editor-1');
    editor1.getSession().setTabSize(2);
    editor1.getSession().setMode('ace/mode/javascript');
    editor1.setTheme('ace/theme/monokai');
    document.getElementById('code-editor-1').style.fontSize='14px';

    editor1.getSession().on('change', function(e) {
        renderCss(cssStyles);
    });

    function renderCss(cssContents) {
        try {
            var fontPresets = JSON.parse(editor1.getValue());

            postcss([ nested, rhythmmeister.processor(fontPresets) ]).process(cssContents).then(function (result) {
                $('#dynamic-css').remove();
                $('<style id="dynamic-css"></style>').appendTo('head').html(result.css);

                setTimeout(function () {
                    editor1.resize();
                }, 2000);

            });
        }
        catch (e) {

        }
    }
});