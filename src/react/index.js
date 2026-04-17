import * as React from 'react';
import { createComponent } from '@lit/react';
import {
  SbButton, SbIconButton, SbButtonGroup, SbCloseButton,
  SbHeading, SbText, SbCode,
  SbContainer, SbStack, SbDivider,
  SbCard, SbAvatar, SbBadge, SbTag, SbAccordion, SbCollapse, SbListGroup, SbCarousel, SbTable,
  SbInput, SbTextarea, SbCheckbox, SbSwitch,
  SbAlert, SbSpinner, SbProgress, SbToast,
  SbLink, SbTabs, SbNav, SbNavbar, SbBreadcrumb, SbPagination,
  SbModal, SbTooltip, SbDropdown, SbOffcanvas, SbPopover,
} from '../index.js';

export const Button = createComponent({
  tagName: 'sb-button',
  elementClass: SbButton,
  react: React,
  events: { onClick: 'sb-click' },
});

export const IconButton = createComponent({
  tagName: 'sb-icon-button',
  elementClass: SbIconButton,
  react: React,
  events: { onClick: 'sb-click' },
});

export const ButtonGroup = createComponent({
  tagName: 'sb-button-group',
  elementClass: SbButtonGroup,
  react: React,
});

export const CloseButton = createComponent({
  tagName: 'sb-close-button',
  elementClass: SbCloseButton,
  react: React,
  events: { onClose: 'sb-close' },
});

export const Heading = createComponent({
  tagName: 'sb-heading',
  elementClass: SbHeading,
  react: React,
});

export const Text = createComponent({
  tagName: 'sb-text',
  elementClass: SbText,
  react: React,
});

export const Code = createComponent({
  tagName: 'sb-code',
  elementClass: SbCode,
  react: React,
});

export const Container = createComponent({
  tagName: 'sb-container',
  elementClass: SbContainer,
  react: React,
});

export const Stack = createComponent({
  tagName: 'sb-stack',
  elementClass: SbStack,
  react: React,
});

export const Divider = createComponent({
  tagName: 'sb-divider',
  elementClass: SbDivider,
  react: React,
});

export const Card = createComponent({
  tagName: 'sb-card',
  elementClass: SbCard,
  react: React,
});

export const Avatar = createComponent({
  tagName: 'sb-avatar',
  elementClass: SbAvatar,
  react: React,
});

export const Badge = createComponent({
  tagName: 'sb-badge',
  elementClass: SbBadge,
  react: React,
});

export const Tag = createComponent({
  tagName: 'sb-tag',
  elementClass: SbTag,
  react: React,
  events: { onRemove: 'sb-remove' },
});

export const Accordion = createComponent({
  tagName: 'sb-accordion',
  elementClass: SbAccordion,
  react: React,
  events: { onChange: 'sb-change' },
});

export const Collapse = createComponent({
  tagName: 'sb-collapse',
  elementClass: SbCollapse,
  react: React,
  events: { onToggle: 'sb-toggle' },
});

export const ListGroup = createComponent({
  tagName: 'sb-list-group',
  elementClass: SbListGroup,
  react: React,
  events: { onSelect: 'sb-select' },
});

export const Carousel = createComponent({
  tagName: 'sb-carousel',
  elementClass: SbCarousel,
  react: React,
  events: { onSlide: 'sb-slide' },
});

export const Table = createComponent({
  tagName: 'sb-table',
  elementClass: SbTable,
  react: React,
});

export const Input = createComponent({
  tagName: 'sb-input',
  elementClass: SbInput,
  react: React,
  events: { onInput: 'sb-input', onChange: 'sb-change' },
});

export const Textarea = createComponent({
  tagName: 'sb-textarea',
  elementClass: SbTextarea,
  react: React,
  events: { onInput: 'sb-input' },
});

export const Checkbox = createComponent({
  tagName: 'sb-checkbox',
  elementClass: SbCheckbox,
  react: React,
  events: { onChange: 'sb-change' },
});

export const Switch = createComponent({
  tagName: 'sb-switch',
  elementClass: SbSwitch,
  react: React,
  events: { onChange: 'sb-change' },
});

export const Alert = createComponent({
  tagName: 'sb-alert',
  elementClass: SbAlert,
  react: React,
  events: { onDismiss: 'sb-dismiss' },
});

export const Spinner = createComponent({
  tagName: 'sb-spinner',
  elementClass: SbSpinner,
  react: React,
});

export const Progress = createComponent({
  tagName: 'sb-progress',
  elementClass: SbProgress,
  react: React,
});

export const Toast = createComponent({
  tagName: 'sb-toast',
  elementClass: SbToast,
  react: React,
  events: { onClose: 'sb-close' },
});

export const Link = createComponent({
  tagName: 'sb-link',
  elementClass: SbLink,
  react: React,
});

export const Tabs = createComponent({
  tagName: 'sb-tabs',
  elementClass: SbTabs,
  react: React,
  events: { onTabChange: 'sb-tab-change' },
});

export const Nav = createComponent({
  tagName: 'sb-nav',
  elementClass: SbNav,
  react: React,
});

export const Navbar = createComponent({
  tagName: 'sb-navbar',
  elementClass: SbNavbar,
  react: React,
});

export const Breadcrumb = createComponent({
  tagName: 'sb-breadcrumb',
  elementClass: SbBreadcrumb,
  react: React,
});

export const Pagination = createComponent({
  tagName: 'sb-pagination',
  elementClass: SbPagination,
  react: React,
  events: { onPageChange: 'sb-page-change' },
});

export const Modal = createComponent({
  tagName: 'sb-modal',
  elementClass: SbModal,
  react: React,
  events: { onClose: 'sb-close' },
});

export const Tooltip = createComponent({
  tagName: 'sb-tooltip',
  elementClass: SbTooltip,
  react: React,
});

export const Dropdown = createComponent({
  tagName: 'sb-dropdown',
  elementClass: SbDropdown,
  react: React,
  events: { onSelect: 'sb-select' },
});

export const Offcanvas = createComponent({
  tagName: 'sb-offcanvas',
  elementClass: SbOffcanvas,
  react: React,
  events: { onClose: 'sb-close' },
});

export const Popover = createComponent({
  tagName: 'sb-popover',
  elementClass: SbPopover,
  react: React,
});
