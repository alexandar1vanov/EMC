//package mk.ukim.finki.wp.emtlab.web.handler;
//
//import mk.ukim.finki.wp.emtlab.model.exception.CategoryNotFoundException;
//import mk.ukim.finki.wp.emtlab.web.controller.BookController;
//import mk.ukim.finki.wp.emtlab.web.dto.ApiError;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.RestControllerAdvice;
//
//@RestControllerAdvice(assignableTypes = BookController.class)
//public class ProductControllerExceptionHandler {
//    @ExceptionHandler(CategoryNotFoundException.class)
//    public ResponseEntity<ApiError> handleNotFound(CategoryNotFoundException exception) {
//        return ResponseEntity
//                .status(HttpStatus.NOT_FOUND)
//                .body(ApiError.of(HttpStatus.NOT_FOUND, exception.getMessage()));
//    }
//}
