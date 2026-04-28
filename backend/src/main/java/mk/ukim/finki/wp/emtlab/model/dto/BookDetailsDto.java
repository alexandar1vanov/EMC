//package mk.ukim.finki.wp.emtlab.model.dto;
//
//import mk.ukim.finki.wp.emtlab.model.domain.Book;
//
//public record BookDetailsDto(
//        Long id,
//        String name,
//        String category,
//        String authorName,
//        String countryName
//) {
//    public static BookDetailsDto from(Book book) {
//        return new BookDetailsDto(
//                book.getId(),
//                book.getName(),
//                book.getCategory(),
//                book.getAuthors(),
//                book.getAvailableCopies());
////                BookDetailsDto.from(book.getCategory())
//        );
//    }
//}
