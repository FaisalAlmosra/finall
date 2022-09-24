package com.example.ppt.exception;


    public class ApiException extends RuntimeException{

        public ApiException(String message) {
            super(message);
        }
}
