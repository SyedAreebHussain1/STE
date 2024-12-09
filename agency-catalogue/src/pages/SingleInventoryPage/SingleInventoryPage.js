import React from 'react'
import GallerySection from './components/GallerySection/GallerySection'
import InventoryDetailsSection from './components/InventoryDetailsSection/InventoryDetailsSection'
import MapSection from './components/MapSection/MapSection'
import SimilarListingsSection from './components/SimilarListingsSection/SimilarListingsSection'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const SingleInventoryPage = () => {
  return (
    <div>
      <Header />
        <GallerySection />
        <InventoryDetailsSection />
        <MapSection />
        <SimilarListingsSection />
        <Footer />
    </div>
  )
}

export default SingleInventoryPage