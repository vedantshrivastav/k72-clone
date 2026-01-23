import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

const Agence = () => {
const image_array = [
  'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
  'https://k72.ca/images/teamMembers/Simon_480x640.jpg?w=480&h=640&fit=crop&s=1e2f3f3f4b1f4e4e5e6e7e8e9eaebecedeeefeff0',
  'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
  'https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca',
  'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
  'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
  'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
  'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
  'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
  "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
]
const imageDivref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useGSAP(() => {
  gsap.to(imageDivref.current, {
    scrollTrigger:{
      trigger:imageDivref.current,
      start:'top 20.5%',
      end:'top -100%',
      pin:true,
      pinSpacing:true,
      pinReparent:true,
      pinType:'transform',
      scrub:true,
      anticipatePin:1,
      invalidateOnRefresh:true,
      onUpdate:(elem)=>{
        const progress = elem.progress;
        const index = Math.floor(progress * (image_array.length-1));
        console.log(index);
        imageDivref.current.src = image_array[index]
        console.log(imageDivref.current.src);
      }
    }
  })
})
  return (
    <div>
      <div className='section-1 relative py-1'>
      <div className='h-[20vw] w-[15vw] absolute top-40 left-[30vw]'>
        <img ref={imageDivref} className='rounded-3xl object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='font-[font-2] relative'>
      <div className='mt-[55vh]'>
        <h1 className='text-[19vw] text-center uppercase leading-[16vw]'>Soixan7e <br />Douze</h1>
      </div>
      <div className='pl-[40%] mt-10'>
        <p className='text-6xl'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
    </div>
    <div className='section-2'></div>
    </div>
  )
}

export default Agence