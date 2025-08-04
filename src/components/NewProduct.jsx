import { X } from 'lucide-react'
import PopUp from './PopUp/PopUp'
import LabelInput from "./LabelInput/LabelInput"
import { useState } from 'react'
import { maskField } from './LabelInput/maskField'

export default function NewProduct({setNewProductModal}){
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        price: 0,
        category: ''
    })

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    }

    return(
        <PopUp>
            <div className="flex justify-end w-full">
                <X className='cursor-pointer text-black' onClick={() => setNewProductModal(false)}/>
            </div>
            <p className="mx-auto text-xl font-medium px-2">Cadastrar novo produto:</p>

            <div className='flex flex-col gap-y-3'>
                <LabelInput label='Nome do produto:' required={true} placeholder='Digite o nome do produto'
                value={formData.name} onChange={(e) => handleChange('name', e.target.value)}/>
                <LabelInput label="Descrição: " required={true} placeholder='Digite uma descrição para o produto' type='mensagem'
                value={formData.description} onChange={(e) => handleChange('description', e.target.value)}/>
                <label className="block text-base text-left">Imagem do produto: *</label>
                <input
                    type="file"
                    accept=".jpg,.png"
                    onChange={(e) => handleChange('image', e.target.files[0])}
                    className="w-full rounded-lg text-sm font-normal bg-[#F7F7F7] 
                        border border-transparent shadow-md text-[#55618C]/60
                        focus:outline-none focus:ring-2 focus:ring-[#55618C]
                        file:mr-4 file:py-3 file:px-4 
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-amber-900 file:text-white
                        hover:file:bg-amber-950"
                />
                <LabelInput label='Categoria:' required={true} type='select'
                options={[
                    {value: 'Lanches', label: 'Lanches'}, 
                    {value: 'Bebidas', label: 'Bebidas'}, 
                    {value: 'Acompanhamentos', label: 'Acompanhamentos'},
                    {value: 'Doces', label: 'Doces'}]}
                value={formData.category} onChange={(e) => handleChange('category', e.target.value)}/>
                <LabelInput label="Valor" required={true}
                    maxLength="100" value={formData.price} onChange={(e) => handleChange('price', maskField('money', e.target.value))}/>
            </div>
            <button className='w-fit mx-auto bg-amber-900 hover:bg-amber-950 text-white p-3 px-6 mt-4 rounded-xl'>Salvar</button>
        </PopUp>
    )
}