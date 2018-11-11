import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var propTypes = {
      baseColor: React.PropTypes.string,
      activeColor: React.PropTypes.string
    },

    defaultProps = {
      baseColor: 'gray',
      activeColor: 'green',
      overlayColor: 'rgba(255,255,255,0.3)'
    };

export default class FileLoader extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = {
            active: false,
            imageSrc: '',
            loaded: false
        }
        this.onFileChange = this.onFileChange.bind(this);
    }


    onFileChange(e, file) {
        var file = file || e.target.files[0],
            pattern = /image-*/,
            reader = new FileReader();

        if (!file.type.match(pattern)) {
            alert('Ошибка загрузки файла!');
            return;
        }

        this.setState({ loaded: false });

        reader.onload = (e) => {
            this.setState({
                imageSrc: reader.result,
                loaded: true
            });
        }

        reader.readAsDataURL(file);
    }

    getFileObject() {
        return this.refs.input.files[0];
    }

    getFileString() {
        return this.state.imageSrc;
    }

    render() {
        let state = this.state,
            props = this.props,
            labelClass  = `uploader ${state.loaded && 'loaded'}`,
            borderColor = state.active ? props.activeColor : props.baseColor,
            iconColor   = state.active
                ? props.activeColor
                : (state.loaded)
                    ? props.overlayColor
                    : props.baseColor;

        return (
            <label
                className={labelClass}
                onDragEnter={this.onDragEnter}
                onDragLeave={this.onDragLeave}
                onDragOver={this.onDragOver}
                onDrop={this.onDrop}
                style={{outlineColor: borderColor}}>

                <img src={state.imageSrc} className={state.loaded && 'loaded'}/>
                <i className="icon icon-upload"
                    style={{ color: iconColor }}></i>
                <input type="file" accept="image/*" onChange={this.onFileChange} ref="input" />
            </label>
        );
    }
}

FileLoader.propTypes = propTypes;
FileLoader.defaultProps = defaultProps;
