'use strict';

function MessageHistory(props) {
  if (!Array.isArray(props.list) || props.list.length < 1) return;
  
  const message = props.list.map(function (message) {
    // Switch Case для определения типа испольуемого компонента
    let usedComponent;
    switch(message.type){
      case "message":
        usedComponent = message;
        break;
        case 'response':
                UsedComponent = Response;
                break;
            case 'typing':
                UsedComponent = Typing;
                break;
            default:
                return null;
        }
    
        
    
