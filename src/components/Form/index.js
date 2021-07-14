import { useState } from 'react';

export default function Form() {
  const [comunidades, setComunidades] = useState([{
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);

  function handleSubmit(event) {
    event.preventDefault();

    const dataForm = new FormData(event.target);

    console.log(dataForm.get('title'))
    console.log(dataForm.get('image'))

    const comunidade = {
      title: dataForm.get('title'),
      image: dataForm.get('image')
    };

    const comunidadesAtualizadas = [...comunidades, comunidade];
    setComunidades(comunidadesAtualizadas);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Qual vai ser o nome da sua comunidade?"
      />
      <input
        type="url"
        name="image"
        placeholder="Coloque uma URL para sua capa"
      />
      <button type="submit">Criar comunidade</button>
    </form>
  );
};