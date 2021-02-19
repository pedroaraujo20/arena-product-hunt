import React, { useMemo } from 'react';
import { FiHeart } from 'react-icons/fi';

import { Container, TextCombination, Votes } from './styles';

interface ListItemProps {
  id: string;
  thumbnail: string;
  name: string;
  description: string;
  votes: number;
}

const ListItem = ({
  id,
  thumbnail,
  name,
  description,
  votes,
}: ListItemProps) => {
  const formattedDescription = useMemo(
    () => description.substr(0, 120).concat('...'),
    [description],
  );

  const handleNavigate = useMemo(() => `/post?id=${id}`, [id]);

  return (
    <Container to={handleNavigate}>
      <img src={thumbnail} alt={name} />

      <TextCombination>
        <strong>{name}</strong>
        <span>{formattedDescription}</span>
      </TextCombination>

      <Votes>
        <FiHeart />
        <span>{votes}</span>
      </Votes>
    </Container>
  );
};

export default ListItem;
