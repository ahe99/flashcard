import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';


import {useCards, useGroups} from '$hooks';
import {Row} from '$layouts/layout';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {StyleText, Loader, Button} from '$components/atoms';
import {Modal} from '$components/molecules';
import {CardList, CardForm, GroupForm} from '$components/organisms';

//to fix: need to import this and put it here which is wierd
import {db} from '$config/firebase';

export const CardListScreen = () => {
  const {cardList, updateCard, deleteCard, createCard, isLoading} = useCards();

  const {groupList, deleteGroup, updateGroup} = useGroups();

  const [onEditCard, setOnEditCard] = useState(false);
  const [onDeleteCard, setOnDeleteCard] = useState(false);
  const [cardId, setCardId] = useState();
  const [onEditGroup, setOnEditGroup] = useState(false);
  const [onDeleteGroup, setOnDeleteGroup] = useState(false);
  const [groupId, setGroupId] = useState();

  const [filterValue, setFilterValue] = useState();

  const filteredList = useMemo(() => {
    if (filterValue) {
      return cardList.filter(({group}) => group === filterValue);
    } else {
      return cardList;
    }
  }, [filterValue, cardList]);

  const submitCardForm = async data => {
    updateCard(data.id, data);
    setOnEditCard(false);
  };

  const submitGroupForm = async data => {
    updateGroup(data.id, data);
    setOnEditGroup(false);
  };

  const toggleVisibleCard = async (id, data) => {
    updateCard(id, data);
  };

  return (
    <ImageBackground
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={images.background.cardList}>
      <View>
        {isLoading ? (
          <Loader>
            <StyleText>Loading...</StyleText>
          </Loader>
        ) : (
          <CardList
            cardList={filteredList}
            groupList={groupList}
            editCard={id => {
              setOnEditCard(true);
              setCardId(id);
            }}
            deleteCard={id => {
              setOnDeleteCard(true);
              setCardId(id);
            }}
            toggleVisibleCard={(id, show) =>
              toggleVisibleCard(id, {show: !show})
            }
            editGroup={id => {
              setOnEditGroup(true);
              setGroupId(id);
            }}
            deleteGroup={id => {
              setOnDeleteGroup(true);
              setGroupId(id);
            }}
          />
        )}
        {onEditCard && (
          <Modal onClose={() => setOnEditCard(false)}>
            <CardForm
              title="Card form"
              cardId={cardId}
              submit={submitCardForm}
              wrapperStyle={{height: height * 0.7, width: '100%'}}
              cancel={() => setOnEditCard(false)}
              cardList={cardList}
              groupList={groupList}
            />
          </Modal>
        )}
        {onEditGroup && (
          <Modal onClose={() => setOnEditGroup(false)}>
            <GroupForm
              title="Group form"
              groupId={groupId}
              submit={submitGroupForm}
              wrapperStyle={{width: '100%'}}
              cancel={() => setOnEditGroup(false)}
              groupList={groupList}
            />
          </Modal>
        )}
        {onDeleteCard && (
          <Modal onClose={() => setOnDeleteCard(false)}>
            <StyleText style={{padding: 40}}>
              Are you sure want to delete?
            </StyleText>
            <Row h="space-between" style={{paddingBottom: 10}}>
              <Button
                iconPrefix={{name: 'close'}}
                onPress={() => setOnDeleteCard(false)}
              />
              <Button
                iconPrefix={{name: 'check'}}
                onPress={() => {
                  deleteCard(cardId);
                  setOnDeleteCard(false);
                }}
              />
            </Row>
          </Modal>
        )}
        {onDeleteGroup && (
          <Modal onClose={() => setOnDeleteGroup(false)}>
            <StyleText style={{padding: 40}}>
              Are you sure want to delete?
            </StyleText>
            <Row h="space-between" style={{paddingBottom: 10}}>
              <Button
                iconPrefix={{name: 'close'}}
                onPress={() => setOnDeleteGroup(false)}
              />
              <Button
                iconPrefix={{name: 'check'}}
                onPress={() => {
                  deleteGroup(groupId);
                  setOnDeleteGroup(false);
                }}
              />
            </Row>
          </Modal>
        )}
      </View>
    </ImageBackground>
  );
};
