import React, { useState, useRef } from 'react'
import { InfoJSON, content } from '../../redux/constant'
import lodash from 'lodash'


interface SearchWidgetProps {
    infoJSON: InfoJSON
    editorMode?: boolean
    setContentJSON?: React.Dispatch<React.SetStateAction<InfoJSON>>
    blockName?: string
}

type PlaceName = keyof InfoJSON

const blockName = 'search-widget'

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
    const { editorMode = false, setContentJSON } = props

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
        <form
            className={blockName}
            onSubmit={(event): void => handleSubmit(event)}
        >
            <div className={`${blockName}__main-view`}>
                <div className={`${blockName}__main-view__search-block`}>
                    <p
                        className={`${blockName}__main-view__search-block__label`}
                        onClick={(event) => {handleSearchPhraseLabelClick(event)}}
                    >
                        {searchPhraseLabel.value}
                    </p>
                    <input
                        className={`${blockName}__main-view__search-block__input`}
                        ref={textInput}
                        type="text"
                    />
                </div>

                <button
                    className={`${blockName}__main-view__filter-button`}
                    onClick={(event) => handleFilterClick(event)}
                    ref={filterButton}
                >
                    {filtersButtonLabel.value}
                </button>
            </div>

            {isOpenFilters && 
            <div className={`${blockName}__filter-options`}>
                <div className={`${blockName}__filter-options__inputs`}>
                    <div className={`${blockName}__filter-options__category-block`}>
                        <p
                            className={`${blockName}__filter-options__category-block__label`}
                            onClick={(event) => handleCategoryLabelClick(event)}
                        >
                            {categoryLabel.value}
                        </p>
                        <input
                            className={`${blockName}__filter-options__category-block__input`}
                            ref={multySelect}
                            type="text"
                            onMouseDown={(event) => handleMultiSelectClick(event)}
                            defaultValue={multiSelectvalue}
                        />
                        {isOpenMultiSelect && 
                        <ul 
                            className={'drop-down'}
                            onMouseLeave={() => setIsOpenMultiSelect(false)}>
                            {content.category.map((item) => 
                            <li
                                className={'drop-down__item'}
                                key={item}
                                onClick={(event) => handleSelectClick(event)}
                                style={{backgroundColor: multiTags.includes(item) ? "#fed96a60" : "inherit"}}
                            >
                                {item}
                            </li>)}
                        </ul>} 
                    </div>
                    
                    <div className={`${blockName}__filter-options__price-block`}>
                        <p
                            className={`${blockName}__filter-options__price-block__label`}
                            onClick={(event) => {handlePriceLabelClick(event)}}
                        >
                            {priceLabel.value}
                        </p>
                        <select
                            className={`${blockName}__filter-options__price-block__input`}
                            ref={singleSelect}
                        >
                            {content.price.length > 0 &&
                            content.price.map((item) => 
                            <option key={item}>{item}</option>)}
                        </select>    
                    </div>  
                </div>              

                <div className={`${blockName}__filter-options__buttons-block`}>
                    <button
                        className={`${blockName}__filter-options__buttons-block__button-apply`}
                        onSubmit={(event) => handleSubmit(event)}
                        onClick={(event) => handleApplyButtonLabelClick(event)}
                    >
                        {applyButtonLabel.value}
                    </button>

                    <button
                        className={`${blockName}__filter-options__buttons-block__button-discard`}
                        onClick={(event) => handleDiscardClick(event)}
                    >
                        {discardButtonLabel.value}
                    </button>
                </div>

                <div className={`${blockName}__tags-block`}>
                    {tags.length > 0 && tags.map((tag) => {
                        return (tag !== '' && 
                        <div className={`${blockName}__tags-block__item`} key={tag}>
                            {<p>{`#${tag}`}</p>}
                        </div>)
                    })}
                </div>
            </div>}
        </form>
    )
}


export default SearchWidget