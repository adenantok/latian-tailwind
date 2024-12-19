"use client"
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import ProductCard from './_components/ProductCard'
import Modal from '@/components/ModalForm'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Navbar onAddProduct={openModal} />
      <Modal isOpen={isModalOpen} closeModal={closeModal} addProduct={function (product: { title: string; description: string; price: number }): void {
        throw new Error('Function not implemented.')
      } } />
      <ProductCard />
    </>
  )
}

