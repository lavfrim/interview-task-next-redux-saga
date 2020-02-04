import React, { useState, useRef } from 'react'
import { InfoJSON, content } from '../../redux/constant'
import lodash from 'lodash'


interface SearchWidgetProps {
    infoJSON: InfoJSON
    editorMode: boolean
    setContentJSON?: React.Dispatch<React.SetStateAction<InfoJSON>>
}

type PlaceName = keyof InfoJSON

const SearchWidget: React.FC<SearchWidgetProps> = (props) => {
    const [isOpenFilters, setIsOpenFilters] = useState<Boolean>(false)
    const [isOpenMultiSelect, setIsOpenMultiSelect] = useState<boolean>(false)
    const [multiTags, setMultiTags] = useState<string[]>([])
    const [tags, setTags] = useState<string[]>([])
    const [cnt, setCnt] = useState<InfoJSON>(props.infoJSON)
    const textInput = useRef(null)
    const multySelect = useRef(null)
    const singleSelect = useRef(null)
    const filterButton = useRef(null)
    const { 
        searchPhraseLabel,
        filtersButtonLabel,
        categoryLabel,
        priceLabel,
        applyButtonLabel,
        discardButtonLabel
    } = cnt
    const { editorMode, setContentJSON } = props

    const multiSelectvalue = multiTags.length > 0 ? multiTags.join(', ').slice() : ''

    const setNewText = (placeName: PlaceName): void => {
        const newCnxt = lodash.cloneDeep(cnt)
        newCnxt[placeName].value = prompt(content.textChangephrase, cnt[placeName].value);
        setCnt(newCnxt)
        setContentJSON(newCnxt)
    }

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault()
        const newTags = multySelect.current.value.split(', ')
        newTags.push(singleSelect.current.value)
        setTags(newTags)
    }

    const handleSearchPhraseLabelClick = (event:  React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault()
        if (event.altKey && editorMode) {
            setNewText('searchPhraseLabel')
        }
    }

    const handleCategoryLabelClick = (event:  React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault()
        if (event.altKey && editorMode) {
            setNewText('categoryLabel')
        }
    }

    const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        if (event.altKey && editorMode) {
            setNewText('filtersButtonLabel')
        } else {
            setIsOpenFilters(!isOpenFilters)
        }
    }

    const handleMultiSelectClick = (event: React.MouseEvent<HTMLInputElement>): void => {
        event.preventDefault()
        multySelect.current.blur()
        setIsOpenMultiSelect(!isOpenMultiSelect)
    }

    const handlePriceLabelClick = (event:  React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault()
        if (event.altKey && editorMode) {
            setNewText('priceLabel')
        }
    }

    const handleSelectClick = (event: React.MouseEvent<HTMLLIElement>): void => {
        event.preventDefault()
        const value: string = event.currentTarget.innerText
        const newMultiTags: string[] = multiTags.slice()

        const index: number = multiTags.indexOf(value)
        if (index >= 0) {
            newMultiTags.splice(index, 1)
        } else {
            newMultiTags.push(value)
        }
        
        setMultiTags(newMultiTags)
    }

    const handleApplyButtonLabelClick = (event:  React.MouseEvent<HTMLButtonElement>): void => {
        if (event.altKey && editorMode) {
            event.preventDefault()
            setNewText('applyButtonLabel')
        }
    }

    const handleDiscardClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        if (event.altKey && editorMode) {
            setNewText('discardButtonLabel')
        } else {
            setTags([])
            setMultiTags([])
        }
    }

    return (
        <>
            <form
                onSubmit={(event): void => handleSubmit(event)}
            >
                <div>
                    <p
                        onClick={(event) => {handleSearchPhraseLabelClick(event)}}
                    >
                        {searchPhraseLabel.value}
                    </p>
                    <input
                        ref={textInput}
                        type="text"
                    />
                </div>

                <button
                    onClick={(event) => handleFilterClick(event)}
                    ref={filterButton}
                >
                    {filtersButtonLabel.value}
                </button>

                {isOpenFilters && 
                <div>
                    <div>
                        <p
                            onClick={(event) => handleCategoryLabelClick(event)}
                        >
                            {categoryLabel.value}
                        </p>
                        <input
                            ref={multySelect}
                            type="text"
                            onMouseDown={(event) => handleMultiSelectClick(event)}
                            value={multiSelectvalue}
                        />
                        {isOpenMultiSelect && 
                        <ul onMouseLeave={() => setIsOpenMultiSelect(false)}>
                            {content.category.map((item) => 
                            <li
                                key={item}
                                onClick={(event) => handleSelectClick(event)}
                                style={{backgroundColor: multiTags.includes(item) ? "gray" : "inherit"}}
                            >
                                {item}
                            </li>)}
                        </ul>} 
                    </div>
                    
                    <div>
                        <p
                            onClick={(event) => {handlePriceLabelClick(event)}}
                        >
                            {priceLabel.value}
                        </p>
                        <select
                            ref={singleSelect}
                        >
                            {content.price.length > 0 &&
                            content.price.map((item) => 
                            <option key={item}>{item}</option>)}
                        </select>    
                    </div>                


                    <button
                        onSubmit={(event) => handleSubmit(event)}
                        onClick={(event) => handleApplyButtonLabelClick(event)}
                    >
                        {applyButtonLabel.value}
                    </button>

                    <button
                        onClick={(event) => handleDiscardClick(event)}
                    >
                        {discardButtonLabel.value}
                    </button>

                    <div>
                        {tags.length > 0 && tags.map((tag) => 
                        <div key={tag}>
                            {tag !== '' && <p>{`#${tag}`}</p>}
                        </div>)}
                    </div>
                </div>}
            </form>
        </>
    )
}


export default SearchWidget