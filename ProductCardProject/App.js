// FILE: App.js
// This is the main application file - REPLACE the existing App.js with this code

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from 'react-native';
import ProductCard from './components/ProductCard';

const App = () => {
  // Callback function when Add to Cart is pressed
  const handleAddToCart = (productName, price) => {
    console.log(`${productName} added to cart at $${price}`);
    // In a real app, this would update cart state
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Product Catalog</Text>
        </View>

        {/* Example 1: Default Layout with Sale Badge */}
        <ProductCard
          productName="Premium Wireless Headphones"
          price={79.99}
          imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
          isOnSale={true}
          onAddToCart={handleAddToCart}
        />

        {/* Example 2: List Layout (Horizontal) */}
        <ProductCard
          productName="Smart Watch Pro"
          price={199.99}
          imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
          isOnSale={false}
          onAddToCart={handleAddToCart}
          layoutType="list"
        />

        {/* Example 3: Custom Background and Button Colors */}
        <ProductCard
          productName="Designer Sunglasses"
          price={149.99}
          imageUrl="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
          isOnSale={true}
          onAddToCart={handleAddToCart}
          cardBackgroundColor="#FFF5E1"
          buttonColor="#FF6B6B"
        />

        {/* Example 4: Price Hidden (showPrice = false) */}
        <ProductCard
          productName="Luxury Leather Bag"
          price={299.99}
          imageUrl="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
          isOnSale={false}
          onAddToCart={handleAddToCart}
          showPrice={false}
        />

        {/* Example 5: List Layout with All Custom Options */}
        <ProductCard
          productName="Running Shoes"
          price={89.99}
          imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
          isOnSale={true}
          onAddToCart={handleAddToCart}
          layoutType="list"
          cardBackgroundColor="#F0F8FF"
          buttonColor="#4CAF50"
        />

        {/* Example 6: Basic Product (Minimal Props) */}
        <ProductCard
          productName="Bluetooth Speaker"
          price={49.99}
          imageUrl="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"
          isOnSale={false}
          onAddToCart={handleAddToCart}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;