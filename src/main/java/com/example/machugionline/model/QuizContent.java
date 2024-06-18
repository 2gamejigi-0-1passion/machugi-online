package com.example.machugionline.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "QUIZCONTENT")
public class QuizContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    @NotNull
    private Quiz quiz;

    @Column(name = "ANSWER", length = 255)
    @NotNull
    @Size(max = 255)
    private String answer;

    @Column(name = "QUESTION", length = 512)
    @NotNull
    @Size(max = 512)
    private String question;



    public QuizContent(

            @NotNull @Size(max = 100) String answer,
            @NotNull @Size(max = 512) Quiz quiz,
            @NotNull @Size(max = 512) String question
    ) {

        this.answer = answer;
        this.quiz = quiz;
        this.question = question;
    }
}