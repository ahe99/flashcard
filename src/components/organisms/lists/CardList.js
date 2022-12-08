/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {ScrollView, View} from 'react-native';

import {Column} from '$layouts/layout';
import {width} from '$helpers/dimensions';

import {CardItem, GroupItem} from '$components/molecules';

export const CardList = ({
  cardList = [],
  groupList = [],
  editCard,
  deleteCard,
  toggleVisibleCard,
  editGroup,
  deleteGroup,
  toggleVisibleGroup,
}) => {
  const noGroupCards = useMemo(
    () => cardList.filter(({group}) => group === ''),
    [cardList],
  );
  return (
    <Column h="center" style={{padding: 20}}>
      {groupList.map((group, index) => {
        const filteredCardList = cardList.filter(
          card => card.group === group.title,
        );

        const filteredCardListComponent = filteredCardList?.map(
          (card, index) => (
            <CardItem
              key={card.id}
              card={card}
              itemsStyle={{
                borderBottomWidth: cardList.length - 1 !== index ? 1 : 0,
                borderBottomColor: '#997b66',
              }}
              deleteCard={deleteCard}
              toggleVisibleCard={toggleVisibleCard}
              editCard={id => editCard(id)}
            />
          ),
        );

        return (
          <Column key={index}>
            {index !== 0 && <SplitLine />}
            <GroupItem
              group={group}
              itemsStyle={{
                borderBottomWidth: 1,
                borderBottomColor: '#997b66',
              }}
              editGroup={editGroup}
              deleteGroup={deleteGroup}
              toggleVisibleGroup={toggleVisibleGroup}>
              {filteredCardListComponent}
            </GroupItem>
          </Column>
        );
      })}
      <Column>
        {noGroupCards && <SplitLine />}
        <GroupItem
          dragDisabled={true}
          toggleDisabled={!Boolean(noGroupCards)}
          group={{title: '...others'}}
          itemsStyle={{
            backgroundColor: '#fff1e6',
            borderBottomWidth: 1,
            borderBottomColor: '#997b66',
          }}>
          {noGroupCards?.map((card, index) => (
            <CardItem
              key={index}
              card={card}
              itemsStyle={{
                borderBottomWidth: cardList.length - 1 !== index ? 1 : 0,
                borderBottomColor: '#997b66',
              }}
              deleteCard={deleteCard}
              toggleVisibleCard={toggleVisibleCard}
              editCard={editCard}
            />
          ))}
        </GroupItem>
      </Column>
    </Column>
  );
};
const SplitLine = () => {
  return (
    <View
      style={{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#997b66',
      }}
    />
  );
};
