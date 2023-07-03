import ManageListings from "../../../models/LandLord/Listings/ManageListings.js";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

// CREATE
export const createListing = async (req, res) => {
  const landlordid = req.body.userid;
  const name = req.body.name;
  const address = req.body.address;
  const rooms = req.body.rooms;
  const beds = req.body.beds;
  const baths = req.body.baths;
  const price = req.body.price;
  const type = req.body.type;
  const description = req.body.description;
  // const images = req.body.images;
  const mapLink = req.body.mapLink;

  const newListing = new ManageListings({
    landlordid,
    name,
    address,
    rooms,
    beds,
    baths,
    price,
    type,
    description,
    // images,
    mapLink,
  });
  try {
    await newListing.save();
    res.status(201).json(newListing);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

// UPDATE
export const updateListing = async (req, res, next) => {
  try {
    const updatedListing = await ManageListings.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteListing = async (req, res, next) => {
  try {
    await ManageListings.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted...");
  } catch (err) {
    next(err);
  }
};

// GET
export const getListing = async (req, res, next) => {
  try {
    const listing = await ManageListings.findById(req.params.id);
    res.status(200).json(listing);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllListings = async (req, res, next) => {
  try {
    const listings = await ManageListings.find();
    res.status(200).json(listings);
  } catch (err) {
    next(err);
  }
};
