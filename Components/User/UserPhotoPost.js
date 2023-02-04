import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input';
import useForm from '../Hooks/useForm';
import useFetch from '../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Button from '../Forms/Button';
import Error from '../Helper/Error'
import { useRouter } from 'next/router';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = React.useState({});
  const {data, error, loading, request} = useFetch();
  const router = useRouter();

  React.useEffect(() =>{
   if(data) router.push('/Conta')
  }, [data, router])
  
  function handleImgChange ({target}){
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }
  function handleSubmit (event){
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    const token = localStorage.getItem('token');
    const {url, options} = PHOTO_POST(formData, token);
    request(url, options);
    
  }
  return (
    <section className={`animeLeft container ${styles.photoPost}`}>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} />
        <Input label='Peso' type='number' name='peso' {...peso}/>
        <Input label='Idade' type='number' name='idade' {...idade} />
        <input className={styles.input} type='file' name='img' id='img' onChange={handleImgChange} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>}
        {<Error error={error} />}
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>}
      </div>
    </section>
  )
}
export default UserPhotoPost