'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  img: './images/profile.jpg'
};

function createCustomDateValidator(isRequired) {
    return function (props, propName, componentName) {
        const prop = props[propName];
        if (prop == null) {
            if (isRequired) {
                throw new Error(`Prop ${propName} is required but wasn't specified.`);
            }
        } else {
            if (!/(\d{4})\-(\d{2})\-(\d{2})/.test(props[propName])) {
                return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. YYYY-MM-DD Supplied: ' + props[propName]
                );
            } else if (+new Date(props[propName]) > +new Date) {
                return new Error(`Specified date ${props[propName]} is more than today`)
            }
        }
    }
}

const customDateValidator = createCustomDateValidator(false);
customDateValidator.isRequired = createCustomDateValidator(true);

Profile.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: function (props, propName, componentName) {
        if (!/https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)/.test(props[propName])) {
            return new Error(
                'Invalid prop `' + propName + '` supplied to' +
                ' `' + componentName + '`. Expected: https://vk.com/(id[0-9]+|[A-Za-z0-9_-]+) Supplied: ' + props[propName]
            );
        }
    },
    birthday: customDateValidator.isRequired
};
