import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <div>
            <Search
                placeholder="키워드를 적어주세요"
                onChange={searchHandler}
                style={{ width: 200 }}
                value={SearchTerm}
            />
        </div>
    )
}

export default SearchFeature