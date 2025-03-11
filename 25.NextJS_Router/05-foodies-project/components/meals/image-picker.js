'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }){
  const imageInput = useRef();
  const [pickedImage, setPickedIamge] = useState();

  // 버튼 클릭 시, input 태그 클릭
  function handlePickClick(){
    imageInput.current.click();
  }

  // 이미지 선택시 미리보기 설정
  function handleImageChange(event){
    const file = event.target.files[0];

    if(!file){
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

  fileReader.onload = () => {
    setPickedIamge(fileReader.result);
  };

  fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor='image'>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet.</p>}
          {pickedImage && 
            <Image src={pickedImage} alt='The image selected by the user.' fill />
          }
        </div>
        <input className={classes.input} 
          type='file'
          id='image' 
          accept='image/png, image/jpeg' 
          name='image' 
          ref={imageInput}
          onChange={handleImageChange}
          // required
        />
        <button className={classes.button} type='button' onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}