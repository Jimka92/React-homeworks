'use strict';

function MessageHistory(props) {
  if (!Array.isArray(props.list) || props.list.length < 1) return;
