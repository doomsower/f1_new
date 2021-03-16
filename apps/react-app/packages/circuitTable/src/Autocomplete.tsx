import React, { useState } from 'react';
import './autocomplete.css';

export const AutoComplete: React.FC<{ curcuitName: string[] }> = (props) => {
    const options = [...props.curcuitName];
    const [display, setDisplay] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');

    const setInput = (nameRace: string) => {
        setSearch(nameRace);
        setDisplay(false);
    };

    let key = 0;

    const filter = (value: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(value.target.value);
    };

    const listResult: string[] = options.filter((name) => {
        return name.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });

    return (
        <div className="autocomplete">
            <input
                type="text"
                value={search}
                placeholder="Type"
                onChange={(e) => filter(e)}
                onFocus={() => setDisplay(!display)}
            />
            {display && listResult.length > 0 && (
                <ul className="autocomplete__list">
                    {listResult.map((name: string) => {
                        return (
                            // eslint-disable-next-line no-plusplus
                            <li key={key++} onClick={() => setInput(name)}>
                                {name}
                            </li>
                        );
                    })}
                </ul>
            )}
            {display && listResult.length === 0 && (
                <ul className="autocomplete__list">
                    <li>Нет результатов</li>
                </ul>
            )}
        </div>
    );
};
