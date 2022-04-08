Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
    try {
        //Get data from clipboard and assign it to an image.
        //clipboard.getData() returns an object, so we need to cast it to a BufferdImage.
        BufferedImage image = (BufferedImage)clipboard.getData(DataFlavor.imageFlavor);

        //file that we'll save to disk.
        File file = new File("image.jpg");

        //class to write image to disk.  You specify the image to be saved, its type,
        // and then the file in which to write the image data.
        ImageIO.write(image, "jpg", file);
    }