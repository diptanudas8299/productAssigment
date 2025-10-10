// FILE: components/ProductCard.js
// This is the main Product Card component

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * ProductCard Component
 * A reusable, configurable product card component for e-commerce applications
 */
const ProductCard = ({
  productName,
  price,
  imageUrl,
  isOnSale = false,
  onAddToCart,
  // Configuration props for no-code platform
  layoutType = 'default',
  cardBackgroundColor = '#FFFFFF',
  buttonColor = '#007AFF',
  showPrice = true,
}) => {
  
  const handleAddToCart = () => {
    console.log(`Added ${productName} to cart`);
    if (onAddToCart) {
      onAddToCart(productName, price);
    }
  };

  // Render default layout: Image on top, text/buttons below
  const renderDefaultLayout = () => (
    <View style={[styles.cardDefault, { backgroundColor: cardBackgroundColor }]}>
      {/* Sale Badge */}
      {isOnSale && (
        <View style={styles.saleBadge}>
          <Text style={styles.saleBadgeText}>SALE</Text>
        </View>
      )}
      
      {/* Product Image */}
      <Image
        source={{ uri: imageUrl || 'https://via.placeholder.com/300' }}
        style={styles.imageDefault}
        resizeMode="cover"
      />
      
      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {productName}
        </Text>
        
        {showPrice && (
          <Text style={styles.price}>
            ${price.toFixed(2)}
          </Text>
        )}
        
        {/* Add to Cart Button */}
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: buttonColor }]}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Render list layout: Image on left, text/buttons on right
  const renderListLayout = () => (
    <View style={[styles.cardList, { backgroundColor: cardBackgroundColor }]}>
      {/* Product Image */}
      <View style={styles.imageListContainer}>
        <Image
          source={{ uri: imageUrl || 'https://via.placeholder.com/150' }}
          style={styles.imageList}
          resizeMode="cover"
        />
        {isOnSale && (
          <View style={styles.saleBadgeList}>
            <Text style={styles.saleBadgeText}>SALE</Text>
          </View>
        )}
      </View>
      
      {/* Product Details */}
      <View style={styles.detailsListContainer}>
        <Text style={styles.productNameList} numberOfLines={2}>
          {productName}
        </Text>
        
        {showPrice && (
          <Text style={styles.priceList}>
            ${price.toFixed(2)}
          </Text>
        )}
        
        {/* Add to Cart Button */}
        <TouchableOpacity
          style={[styles.addButtonList, { backgroundColor: buttonColor }]}
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return layoutType === 'list' ? renderListLayout() : renderDefaultLayout();
};

const styles = StyleSheet.create({
  // Default Layout Styles (Image on top)
  cardDefault: {
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageDefault: {
    width: '100%',
    height: 200,
    backgroundColor: '#F0F0F0',
  },
  detailsContainer: {
    padding: 16,
  },
  
  // List Layout Styles (Image on left)
  cardList: {
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    minHeight: 120,
  },
  imageListContainer: {
    width: 120,
    position: 'relative',
  },
  imageList: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
  },
  detailsListContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  productNameList: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  priceList: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginVertical: 4,
  },
  addButtonList: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  
  // Common Styles
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginBottom: 12,
  },
  addButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  saleBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#E74C3C',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    zIndex: 10,
  },
  saleBadgeList: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#E74C3C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 10,
  },
  saleBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProductCard;