import {css} from 'lit-element';

export const subjectInfosStyle = css`
    a:hover, a:focus, a:link {
        text-decoration: none;
        outline: none;
    }
    a {
        color: color: var(--subject-infos-text-color, #000)
    }
    a:hover,
    a:focus,
    a:hover>div,
    a:focus>div {
        color: var(--subject-infos-focus-text-color, #25B2F3);
        background-color: var(--subject-infos-focus-background-color, transparent);
    }

    a.icon {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        margin: 0px 2px;
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
    }
    a.icon:before {
        content: '\\f128';
    }

    .icon-question {
        font-family: var(--icon-question-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-question-font-weight, 900);
    }
    .icon-question:before {
        content: var(--icon-question-content, '\\f128');
    }
    a.icon-users {
        font-family: var(--icon-users-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-users-font-weight, 900);
    }
    a.icon-users:before {
        content: var(--icon-users-content, '\\f0c0');
    }
    a.icon-user {
        font-family: var(--icon-user-font-family, 'Font Awesome 5 Free');
        font-weight: var(--icon-user-font-weight, 900);
    }
    a.icon-user:before {
        content: var(--icon-user-content, '\\f007');
    }

    [data-tooltip] {
        position: relative;
    }
  `