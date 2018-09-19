'use strict';

function MessageHistory(props) {
  if (!Array.isArray(props.list) || props.list.length < 1) return;
  
  const messages = props.list.map(function (message) {
    // Switch Case для определения типа испольуемого компонента
    let usedComponent;
    switch(message.type){
      case "message":
        usedComponent = message;
        break;
        case 'response':
                usedComponent = Response;
                break;
            case 'typing':
                usedComponent = Typing;
                break;
            default:
                return null;
        }
    return(
      <usedComponent
      key={message.id}
                from={message.from}
                message={{
                    text: message.text,
                    time: message.time,
                    id: message.id
                }}
            />
        );
    });
    return(
        <ul>
            {messages}
        </ul>
    );
}
    
        
    
