import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options.map((o, i) => { // map options with key

        const finalClass = s.radio + ' ' + (value === o && s.radioChecked)

        return (
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    // name, checked, value, onChange
                    name={name}
                    value={o}
                    checked={value === o}
                    onChange={onChangeCallback}
                    className={finalClass}
                />
                {o}
            </label>
        )
    }) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
