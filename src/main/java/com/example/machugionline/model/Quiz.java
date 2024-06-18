package com.example.machugionline.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "QUIZ")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME", length = 255)
    @NotNull
    @Size(max = 255)
    private String name;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @NotNull
    private User user;

    @Column(name = "DESCRIPTION", length = 512)
    @NotNull
    @Size(max = 512)
    private String description;

    @Column(name = "TYPE", length = 1)
    @NotNull
    @Size(min = 1, max = 1)
    private int type; //0은 공개, 1은 비공개, 2는 잠김, 3은 삭제

    @Column(name = "THUMBNAIL", length = 512)
    @Size(max = 512)
    private String thumbnail;

    @OneToMany
    @JoinColumn(name = "quiz_content_id")
    @NotNull
    private List<Quiz> quizContent;

    @Column(name = "CREATED_AT")
    @NotNull
    private LocalDateTime createdAt;

    @Column(name = "MODIFIED_AT")
    @NotNull
    private LocalDateTime modifiedAt;

    public Quiz(

            @NotNull @Size(max = 100) String name,
            @NotNull @Size(max = 512) User user,
            @NotNull @Size(max = 512) String description,
            @NotNull @Size(max = 1) int type,
            @NotNull @Size(max = 512) String thumbnail,
            @NotNull @Size(max = 512) List<Quiz> quizContent,
            @NotNull LocalDateTime createdAt,
            @NotNull LocalDateTime modifiedAt
    ) {

        this.name = name;
        this.user = user;
        this.description = description;
        this.type = type;
        this.thumbnail = thumbnail;
        this.quizContent = quizContent;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
}