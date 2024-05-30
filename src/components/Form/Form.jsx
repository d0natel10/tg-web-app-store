import React from 'react';
import './Form.css';
import {useEffect, useState} from 'react';
import {useTelegram} from '../../hooks/useTelegram';

const Form = () => {
    const [Country, setCountry] = useState('');
    const [Street, setStreet] = useState('');
    const [Type, setType] = useState('natural');
    const {tg} = useTelegram();

    useEffect ( () => {
        tg.MainButton.setParams ({
            text: 'Send Data'
        })
    }, []);

    useEffect( () => {
        if(!Street || !Country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [Country, Street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }

    const onChangeType = (e) => {
        setType(e.target.value);
    }
    return (
        <div className = {'form'}>
            <h3>Введите данные: </h3>
        <input 
            className = {'input'} 
            type = "text" 
            placeholder ={'Country'}
            value = {Country}
            onChange = {onChangeCountry}
        />
           <input 
            className = {'input'} 
            type = "text" 
            placeholder ={'Street'}
            value = {Street}
            onChange = {onChangeStreet}
        />
        <select className = {'select'} value = {Type} onChange = {onChangeType}>
            
            <option value={'natural'}>Gay</option>
            <option value={'nonatural'}>Pidor</option>
        </select>
        </div>
    );
};

export default Form;