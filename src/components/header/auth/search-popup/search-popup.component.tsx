import React, { FC } from 'react';

import { useSearchUsername } from 'hooks';
import User, { UserLoading } from './user';

import { Container, NotFound, LoadMore } from './search-popup.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  searchValue: string;
  handleClose: () => void;
};

const SearchPopup: FC<Props> = ({ searchValue, handleClose }) => {
  const { ref, data, isLoading, canFetchMore } = useSearchUsername(searchValue);

  /**
   * Render notifications
   */

  const renderNotifications = () => {
    if (isLoading) {
      return (
        <>
          <UserLoading />
          <UserLoading />
        </>
      );
    }

    if (data) {
      if (data[0].users.length === 0) {
        return <NotFound>No results found</NotFound>;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.users &&
            page.users.map((user) => {
              return <User key={user._id} user={user} handleClose={handleClose} />;
            })}
        </React.Fragment>
      ));
    }
  };

  return (
    <Container>
      {renderNotifications()}

      {canFetchMore && (
        <LoadMore ref={ref}>
          <UserLoading />
        </LoadMore>
      )}
    </Container>
  );
};

export default SearchPopup;
