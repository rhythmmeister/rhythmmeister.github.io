import $ from 'jquery';
import 'hotkeys';
import ace from 'ace';
import 'ace/theme-monokai';
import 'ace/mode-javascript';

$(function() {
    $(document).bind('keydown', 'ctrl+\\', function () {
        toggleHtmlClass('has-visible-vertical-rhythm-grid');
    });

    $(document).bind('keydown', 'ctrl+\'', function () {
        toggleHtmlClass('has-visible-vertical-rhythm-helpers');
    });

    $(document).bind('keydown', 'ctrl+;', function () {
        toggleHtmlClass('has-visible-horizontal-grid');
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
    var editor = ace.edit('code-editor-1');
    editor.getSession().setTabSize(2);
    editor.getSession().setMode('ace/mode/javascript');
    editor.setTheme('ace/theme/monokai');
    document.getElementById('code-editor-1').style.fontSize='14px';

    editor.getSession().on('change', function(e) {
        console.log(editor.getValue());
    });
});