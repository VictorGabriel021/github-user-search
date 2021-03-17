import React, { useState } from 'react';
import './styles.scss';
import Button from '../../core/components/Button';
import axios from 'axios';
import ImageLoader from './Loaders/ImageLoader';
import InfoLoader from './Loaders/InfoLoader';
import dayjs from 'dayjs';

type FormState = {
  login: string;
  avatar_url: string;
  followers: string;
  following: string;
  created_at: string;
  public_repos: string;
  location: string;
  blog: string;
  company: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setClick] = useState(false);

  const [formData, setFormData] = useState<FormState>({
    login: '',
    avatar_url: '',
    followers: '',
    following: '',
    created_at: '',
    public_repos: '',
    location: '',
    blog: '',
    company: ''
  });

  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;
  
    setFormData(data => ({ ...data, [name]: value }));    
  }

  const handleOnClick = () => {
    setClick(true);
    setIsLoading(true);
  }

  const handleOnClickProfile = () => {
    window.open(`https://github.com/` + formData.login);
  }
  
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const BASE_URL = 'https://api.github.com/users/';
    
    return axios({
      method: 'GET',
      url: `${BASE_URL}${formData.login}`,
      data: formData
    })
    .then(response => {
      setFormData(response.data);
    }).catch(() => {
      setClick(false);
      setIsLoading(false);
    })
    .finally(() => setIsLoading(false));
  }

  return (
  <form onSubmit={handleOnSubmit}>
    <div className="search-container">
      <div className="search-content">
        <h1 className="search-title">Encontre um perfil Github</h1>
        <input 
          type="text"
          name="login"
          value={formData.login}
          onChange={handleOnChange} 
          placeholder="Usuário Github"
          className="search-input"
        />
        <br />
        <Button title="Encontrar" handleOnClick={handleOnClick} />
      </div>
      {isClick && (
      <div className="form-container">
          {isLoading ? (
            <>
            <div className="form-content">
              <div className="form-img">
                <ImageLoader />
              </div>
              <div className="form-user-information">
                <InfoLoader />
              </div>
            </div>
            </>
         ) : (
        <>
          <div className="form-content">
            <img src={formData.avatar_url} alt={formData.avatar_url} className="form-img" />
            <div className="form-user-information">
              <div className="form-items">
                <p className="form-item">Repositórios públicos: {formData.public_repos}</p>
                <p className="form-item">Seguidores: {formData.followers}</p>
                <p className="form-item">Seguindo: {formData.following}</p>
              </div>
              <div className="form-information">
                <h2 className="form-information-title">Informações</h2>
                <h3 className="form-information-item"><b>Empresa:</b> {formData.company}</h3>
                <h3 className="form-information-item"><b>Website/Blog:</b> {formData.blog}</h3>
                <h3 className="form-information-item"><b>Localidade:</b> {formData.location}</h3>
                <h3 className="form-information-item"><b>Membro desde:</b> {dayjs(formData.created_at).format('DD/MM/YYYY')}</h3>
              </div>
            </div>
          </div>
            <Button title="Ver Perfil" handleOnClick={handleOnClickProfile} />
        </>
        )}
      </div>  
    )}
    </div>
  </form>
  );
};

export default Search;