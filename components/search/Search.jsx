import {MdSearch} from 'react-icons/md'

const Search = ({placeholder}) => {
  return (
      <div className="flex items-center gap-10 bg-white padding-10px border-radius-10px w-max">
          <MdSearch />
          <input type="text" placeholder={placeholder} className="bg-white border-none outline-none"/>
    </div>
  )
}

export default Search