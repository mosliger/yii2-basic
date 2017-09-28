import React, { PropTypes } from 'react'
import { isEmpey } from '../helpers/global'

export default class UploadImage extends React.Component {
  static propTypes = {
    // width: PropTypes.number,
    // height: PropTypes.number,
    // maxSize: PropTypes.number,
    src: PropTypes.string,
    name: PropTypes.string
  }

  static defaultProps = {
    src: '',
    name: 'input-file'
  }

  state = {
    files: {},
    isUpload: false
  }

  handalUploadImage = () => {
    const input = this.thisInputimage
    const files = input.files
    const THIS = this
    if (files && files.length > 0) {
      const setPromise = []
      for (const key in files) {
        const file = files[key]
        if (/^image/.test(file.type)) {
          setPromise.push(
            new Promise((resolve, reject) => {
              const reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onload = (e) => {
                const base64 = e.target.result
                const img = new Image()
                img.src = base64
                img.onload = function() {
                  const res = {
                    file,
                    size: (file.size * 0.000001),
                    event: e,
                    type: file.type,
                    name: file.name,
                    width: this.width,
                    height: this.height,
                    base64
                  }
                  // if (validateImg !== '') reject(validateImg)
                  resolve(res)
                }
              }
            })
          )
        }
      }

      Promise.all(setPromise)
      .then((values) => {
        this.setState({
          isUpload: true,
          files: values[0] ? values[0] : {}
        })
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }

  iconUpload = () => {
    const { src } = this.props
    const { isUpload, files } = this.state
    const iconImage = (
      <a href='Jacascript:' className='icom-img'>
        <i className='fa fa-file-image-o' aria-hidden='true'></i>
      </a>
    )
    if (!isEmpey(src) && !isUpload) return (<img src={src} />)
    if (isUpload && !isEmpey(files.base64)) return (<img src={files.base64} />)
    return iconImage
  }

  clearImage = () => {
    const file = this.thisInputimage
    file.value = ''
    this.setState(() => {
      return {
        isUpload: false,
        files: []
      }
    })
  }

  render() {
    const { name, src } = this.props
    const { files } = this.state
    let buttonClear = (
      <div className='button-clear'>
        <a href='Javascript:;' onClick={this.clearImage}>
          <i className='fa fa-times' aria-hidden='true'></i>
        </a>
      </div>
    )
    if (isEmpey(src) || isEmpey(files.base64)) buttonClear = ''

    return (
      <div className='upload-image'>
        <div className='box-icon-image'>
          {this.iconUpload()}
        </div>
        <input
          type='file'
          ref={(input) => this.thisInputimage = input}
          className='input-file'
          name={name}
          accept='image/*'
          onChange={() => this.handalUploadImage()}
        />
        {buttonClear}
      </div>
    )
  }
}
