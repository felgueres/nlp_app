import React from "react";
import { useSearchParams, useNavigate, createSearchParams } from "react-router-dom";
import { usePathname } from "../utils/utils";

export const SearchBar = () => {
    let [searchParams,] = useSearchParams();
    let navigate = useNavigate()
    let pathname = usePathname()
    let query = searchParams.get("q")

    async function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let newQuery = formData.get("query");
        if (!newQuery) return;
        navigate({
            pathname: "/search",
            search: `?${createSearchParams({ 'q': newQuery, 'collection': 'summaryV2', 'limit': 10 })}`
        })
    }

    return (
        <>
        <td>
            <table id='searchform-table'>
                <tbody>
                    <tr >
                        <td >
                            <form id='search-form' onSubmit={handleSubmit}>
                                <label>
                                    <input defaultValue={pathname === '/transcript' ? undefined : (query ?? undefined)} type="text" name="query" autoComplete="off" placeholder="Search" />
                                </label>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>

        </td>
        </>
    );
};

export default SearchBar;