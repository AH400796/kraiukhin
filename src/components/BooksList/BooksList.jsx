import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBooks } from 'services/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { notify } from 'helpers/notification';

import {
  CardsWrapper,
  CardsList,
  Wrapper,
  ButtonsWrapper,
  Title,
  BackButtons,
  LoadMoreButtons,
  StyledLabel,
  NoFilterText,
  StyledSelect,
} from './BooksList.styled';
import Book from 'components/Book/Book';

export default function BooksList() {
  const [noFilterResult, setNoFilterResult] = useState(false);
  const [books, setBooks] = useState([]);
  const [params, setParams] = useState({ page: 1, limit: 2 });
  const [searchParams, setSearchParams] = useSearchParams();
  const loadMoreButtonRef = useRef(null);
  const [filter, setFilter] = useState('show all');
  const [following, setFollowing] = useState(() => {
    const localStorFollowing = JSON.parse(localStorage.getItem(`following`));
    return localStorFollowing ? localStorFollowing : {};
  });

  useEffect(() => {
    setSearchParams({ page: 1, limit: params.limit });
    (async () => {
      try {
        const response = await getBooks(params);
        setBooks([...response.data]);
      } catch (error) {
        notify('error', 'Sorry, something goes wrong...');
      }
    })();
  }, [searchParams, setSearchParams, params]);

  useEffect(() => {
    loadMoreButtonRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [books]);

  useEffect(() => {
    if (!noFilterResult) {
      setTimeout(() => setNoFilterResult(true), 3000);
    }
  }, [noFilterResult]);

  const handleLoadMore = () => {
    setParams(prevState =>
      prevState.limit < 10
        ? { ...prevState, limit: prevState.limit + 2 }
        : prevState
    );
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleFollowing = id => {
    setFollowing(prevState => ({
      ...prevState,
      [id]: prevState[id] ? !prevState[id] : true,
    }));
  };

  const getFilteredBooks = () => {
    switch (filter) {
      case 'follow':
        return books.filter(book => following[book.id] !== true);
      case 'followings':
        return books.filter(book => following[book.id] === true);
      default:
        return books;
    }
  };
  const filteredBooks = getFilteredBooks();

  localStorage.setItem(`following`, JSON.stringify(following));
  console.log(noFilterResult);

  return (
    <Wrapper>
      <Title>Мої видані та (ще) не видані книги</Title>

      {filteredBooks.length === 0 && noFilterResult ? (
        <NoFilterText>
          There are no tweeters with such filter settings...
        </NoFilterText>
      ) : (
        <CardsWrapper>
          <CardsList>
            {filteredBooks.map(book => {
              const { id, user, books, followers, avatar } = book;
              const isFollowing = following[id] ? following[id] : false;
              return (
                <Book
                  key={id}
                  id={id}
                  user={user}
                  books={books}
                  followers={followers}
                  avatar={avatar}
                  setFollowing={handleFollowing}
                  isFollowing={isFollowing}
                />
              );
            })}
          </CardsList>
        </CardsWrapper>
      )}

      <ButtonsWrapper>
        <BackButtons to="/">
          <AiOutlineArrowLeft size={25} color="inherit" />
          Back
        </BackButtons>
        <StyledLabel>
          Filter tweeters?
          <StyledSelect name="books" onChange={handleChange}>
            <option value="show all">show all</option>
            <option value="follow">follow</option>
            <option value="followings">followings</option>
          </StyledSelect>
        </StyledLabel>
        <LoadMoreButtons
          type="buttons"
          ref={loadMoreButtonRef}
          onClick={handleLoadMore}
        >
          Load more...
        </LoadMoreButtons>
      </ButtonsWrapper>
    </Wrapper>
  );
}
