'use strict';

function MessageHistory(props) {
  if (!Array.isArray(props.list) || props.list.length < 1) return;
  
  const messages = props.list.map(function (message) {
    // Switch Case для определения типа активного компонента
    let ActiveComponent;
        switch (message.type){
            case 'message':
                ActiveComponent = Message;
                break;
            case 'response':
                ActiveComponent = Response;
                break;
            case 'typing':
                ActiveComponent = Typing;
                break;
            default:
                return null;
        }
    return(
      <ActiveComponent
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
    
        
    
