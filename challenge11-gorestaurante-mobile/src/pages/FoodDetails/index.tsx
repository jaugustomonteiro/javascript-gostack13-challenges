import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import { Image, Modal } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

import {
  Container,
  Header,
  ScrollContainer,
  FoodsContainer,
  Food,
  FoodImageContainer,
  FoodContent,
  FoodTitle,
  FoodDescription,
  FoodPricing,
  AdditionalsContainer,
  Title,
  TotalContainer,
  AdittionalItem,
  AdittionalItemText,
  AdittionalQuantity,
  PriceButtonContainer,
  TotalPrice,
  QuantityContainer,
  FinishOrderButton,
  ButtonText,
  IconContainer,
  PaymentConfirmation,
  PaymentConfirmationText,
} from './styles';

interface Params {
  id: number;
}

interface Extra {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  formattedPrice: string;
  extras: Extra[];
}

const FoodDetails: React.FC = () => {
  const [food, setFood] = useState({} as Food);
  const [extras, setExtras] = useState<Extra[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [foodQuantity, setFoodQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadFood(): Promise<void> {
      const response = await api.get(`/foods/${routeParams.id}`);
      setFood({
        ...response.data,
        formattedPrice: formatValue(response.data.price),
      });

      setExtras(
        response.data.extras.map((extra: Omit<Extra, 'quantity'>) => ({
          ...extra,
          quantity: 0,
        })),
      );
    }

    loadFood();
  }, [routeParams]);

  function handleIncrementExtra(id: number): void {
    setExtras(
      extras.map(extra =>
        extra.id === id ? { ...extra, quantity: extra.quantity + 1 } : extra,
      ),
    );
  }

  function handleDecrementExtra(id: number): void {
    const findExtra = extras.find(extra => extra.id === id);
    if (!findExtra) return;
    if (findExtra.quantity === 0) return;

    setExtras(
      extras.map(extra =>
        extra.id === id ? { ...extra, quantity: extra.quantity - 1 } : extra,
      ),
    );
  }

  function handleIncrementFood(): void {
    setFoodQuantity(foodQuantity + 1);
  }

  function handleDecrementFood(): void {
    if (foodQuantity === 1) return;
    setFoodQuantity(foodQuantity - 1);
  }

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      api.delete(`/favorites/${food.id}`);
    } else {
      api.post('/favorites', food);
    }

    setIsFavorite(!isFavorite);
  }, [isFavorite, food]);

  const cartTotal = useMemo(() => {
    const extraTotal = extras.reduce((accumulator, extra) => {
      return accumulator + extra.quantity * extra.value;
    }, 0);

    const footTotal = food.price;

    return formatValue((extraTotal + footTotal) * foodQuantity);
  }, [extras, food, foodQuantity]);

  async function handleFinishOrder(): Promise<void> {
    setShowModal(true);
    setTimeout(() => {
      navigation.navigate('MainBottom', {
        screen: 'Dashboard',
      });
    }, 3000);
  }

  // Calculate the correct icon name
  const favoriteIconName = useMemo(
    () => (isFavorite ? 'favorite' : 'favorite-border'),
    [isFavorite],
  );

  useLayoutEffect(() => {
    // Add the favorite icon on the right of the header bar
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcon
          name={favoriteIconName}
          size={24}
          color="#FFB84D"
          onPress={() => toggleFavorite()}
        />
      ),
    });
  }, [navigation, favoriteIconName, toggleFavorite]);

  const HandleGotoDashborad = useCallback(() => {
    console.warn(13333);
  }, [navigation]);

  return (
    <>
      <Modal
        statusBarTranslucent
        animationType="slide"
        transparent
        visible={showModal}
      >
        <PaymentConfirmation>
          <Icon name="thumbs-up" size={50} color="#39B100" />
          <PaymentConfirmationText>Pedido Confirmado</PaymentConfirmationText>
        </PaymentConfirmation>
      </Modal>
      <Container>
        <Header />

        <ScrollContainer>
          <FoodsContainer>
            <Food>
              <FoodImageContainer>
                <Image
                  style={{ width: 327, height: 183 }}
                  source={{
                    uri: food.image_url,
                  }}
                />
              </FoodImageContainer>
              <FoodContent>
                <FoodTitle>{food.name}</FoodTitle>
                <FoodDescription>{food.description}</FoodDescription>
                <FoodPricing>{food.formattedPrice}</FoodPricing>
              </FoodContent>
            </Food>
          </FoodsContainer>
          <AdditionalsContainer>
            <Title>Adicionais</Title>
            {extras.map(extra => (
              <AdittionalItem key={extra.id}>
                <AdittionalItemText>{extra.name}</AdittionalItemText>
                <AdittionalQuantity>
                  <Icon
                    size={15}
                    color="#6C6C80"
                    name="minus"
                    onPress={() => handleDecrementExtra(extra.id)}
                    testID={`decrement-extra-${extra.id}`}
                  />
                  <AdittionalItemText testID={`extra-quantity-${extra.id}`}>
                    {extra.quantity}
                  </AdittionalItemText>
                  <Icon
                    size={15}
                    color="#6C6C80"
                    name="plus"
                    onPress={() => handleIncrementExtra(extra.id)}
                    testID={`increment-extra-${extra.id}`}
                  />
                </AdittionalQuantity>
              </AdittionalItem>
            ))}
          </AdditionalsContainer>
          <TotalContainer>
            <Title>Total do pedido</Title>
            <PriceButtonContainer>
              <TotalPrice testID="cart-total">{cartTotal}</TotalPrice>
              <QuantityContainer>
                <Icon
                  size={15}
                  color="#6C6C80"
                  name="minus"
                  onPress={handleDecrementFood}
                  testID="decrement-food"
                />
                <AdittionalItemText testID="food-quantity">
                  {foodQuantity}
                </AdittionalItemText>
                <Icon
                  size={15}
                  color="#6C6C80"
                  name="plus"
                  onPress={handleIncrementFood}
                  testID="increment-food"
                />
              </QuantityContainer>
            </PriceButtonContainer>

            <FinishOrderButton onPress={() => handleFinishOrder()}>
              <ButtonText>Confirmar pedido</ButtonText>
              <IconContainer>
                <Icon name="check-square" size={24} color="#fff" />
              </IconContainer>
            </FinishOrderButton>
          </TotalContainer>
        </ScrollContainer>
      </Container>
    </>
  );
};

export default FoodDetails;
